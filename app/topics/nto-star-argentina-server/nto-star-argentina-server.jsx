import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-argentina-server');
}

export default function NtoStarArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-argentina-server" />;
}
