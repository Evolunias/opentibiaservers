import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-open-pvp');
}

export default function KyraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="kyra-open-pvp" />;
}
