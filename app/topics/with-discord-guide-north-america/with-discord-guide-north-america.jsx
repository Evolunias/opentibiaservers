import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-north-america');
}

export default function WithDiscordGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-north-america" />;
}
