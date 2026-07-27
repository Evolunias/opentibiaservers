import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-pvp-history');
}

export default function EleraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="elera-pvp-history" />;
}
