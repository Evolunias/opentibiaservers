import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-evo-server');
}

export default function NtoStar13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-evo-server" />;
}
