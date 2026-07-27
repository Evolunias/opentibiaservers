import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-guide-usa');
}

export default function WithDiscordGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-guide-usa" />;
}
