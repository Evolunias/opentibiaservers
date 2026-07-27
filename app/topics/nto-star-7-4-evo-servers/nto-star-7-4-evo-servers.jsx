import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-evo-servers');
}

export default function NtoStar74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-evo-servers" />;
}
