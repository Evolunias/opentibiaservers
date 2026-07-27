import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nto-star-server');
}

export default function EvoNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="evo-nto-star-server" />;
}
