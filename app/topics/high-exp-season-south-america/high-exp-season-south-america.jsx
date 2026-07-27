import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-south-america');
}

export default function HighExpSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-south-america" />;
}
