import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-latin-america');
}

export default function WithDiscordGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-latin-america" />;
}
