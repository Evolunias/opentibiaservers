import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-open-pvp');
}

export default function PaceraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="pacera-open-pvp" />;
}
