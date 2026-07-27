import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-usa-server');
}

export default function NtoStarUsaServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-usa-server" />;
}
