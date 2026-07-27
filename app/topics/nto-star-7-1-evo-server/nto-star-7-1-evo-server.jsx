import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-1-evo-server');
}

export default function NtoStar71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-1-evo-server" />;
}
