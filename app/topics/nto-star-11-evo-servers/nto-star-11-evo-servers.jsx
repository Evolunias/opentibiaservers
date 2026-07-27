import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-evo-servers');
}

export default function NtoStar11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-evo-servers" />;
}
