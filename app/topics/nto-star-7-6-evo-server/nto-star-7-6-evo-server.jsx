import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-evo-server');
}

export default function NtoStar76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-evo-server" />;
}
