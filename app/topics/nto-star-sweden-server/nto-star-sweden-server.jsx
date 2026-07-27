import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-sweden-server');
}

export default function NtoStarSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-sweden-server" />;
}
