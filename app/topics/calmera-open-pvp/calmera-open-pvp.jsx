import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-open-pvp');
}

export default function CalmeraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="calmera-open-pvp" />;
}
