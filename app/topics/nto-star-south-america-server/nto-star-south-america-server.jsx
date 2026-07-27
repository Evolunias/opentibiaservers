import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-south-america-server');
}

export default function NtoStarSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-south-america-server" />;
}
