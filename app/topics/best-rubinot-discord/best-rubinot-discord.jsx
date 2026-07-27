import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-discord');
}

export default function BestRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-discord" />;
}
