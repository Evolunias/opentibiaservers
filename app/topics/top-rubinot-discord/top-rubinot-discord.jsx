import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-discord');
}

export default function TopRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-discord" />;
}
