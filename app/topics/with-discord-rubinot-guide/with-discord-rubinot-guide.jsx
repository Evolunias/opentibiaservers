import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-guide');
}

export default function WithDiscordRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-guide" />;
}
