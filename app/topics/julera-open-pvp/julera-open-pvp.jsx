import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-open-pvp');
}

export default function JuleraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="julera-open-pvp" />;
}
