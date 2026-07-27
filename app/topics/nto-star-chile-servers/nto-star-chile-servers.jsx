import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-chile-servers');
}

export default function NtoStarChileServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-chile-servers" />;
}
