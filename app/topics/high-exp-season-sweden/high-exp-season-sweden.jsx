import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-season-sweden');
}

export default function HighExpSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-season-sweden" />;
}
