import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-canada-server');
}

export default function NtoStarCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-canada-server" />;
}
