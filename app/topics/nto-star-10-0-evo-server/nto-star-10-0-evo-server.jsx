import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-evo-server');
}

export default function NtoStar100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-evo-server" />;
}
