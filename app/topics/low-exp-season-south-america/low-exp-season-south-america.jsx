import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-south-america');
}

export default function LowExpSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-south-america" />;
}
