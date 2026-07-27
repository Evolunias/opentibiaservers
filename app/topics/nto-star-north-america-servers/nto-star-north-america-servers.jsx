import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-north-america-servers');
}

export default function NtoStarNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-north-america-servers" />;
}
