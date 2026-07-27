import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-canada');
}

export default function LowExpSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-canada" />;
}
