import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-high-exp-server-sweden');
}

export default function NtoStarHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-high-exp-server-sweden" />;
}
