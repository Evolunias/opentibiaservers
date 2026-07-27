import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-poland-server');
}

export default function NtoStarPolandServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-poland-server" />;
}
