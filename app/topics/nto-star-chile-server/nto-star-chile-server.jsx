import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-chile-server');
}

export default function NtoStarChileServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-chile-server" />;
}
