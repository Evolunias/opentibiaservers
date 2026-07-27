import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-usa');
}

export default function LowExpSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-usa" />;
}
