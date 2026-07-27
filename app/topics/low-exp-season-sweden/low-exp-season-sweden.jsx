import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-season-sweden');
}

export default function LowExpSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-season-sweden" />;
}
