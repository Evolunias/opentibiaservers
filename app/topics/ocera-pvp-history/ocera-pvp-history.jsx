import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-pvp-history');
}

export default function OceraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="ocera-pvp-history" />;
}
