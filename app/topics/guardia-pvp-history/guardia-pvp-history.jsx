import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-pvp-history');
}

export default function GuardiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="guardia-pvp-history" />;
}
