import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-canada-servers');
}

export default function NtoStarCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-canada-servers" />;
}
