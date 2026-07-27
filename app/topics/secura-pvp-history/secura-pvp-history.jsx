import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-pvp-history');
}

export default function SecuraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="secura-pvp-history" />;
}
