import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-evo-server');
}

export default function NtoStar80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-evo-server" />;
}
