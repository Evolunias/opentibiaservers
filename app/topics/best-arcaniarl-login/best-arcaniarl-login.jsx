import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-login');
}

export default function BestArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-login" />;
}
