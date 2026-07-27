import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-low-exp-server-sweden');
}

export default function NtoStarLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-low-exp-server-sweden" />;
}
