import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-guide');
}

export default function WithDiscordMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-guide" />;
}
