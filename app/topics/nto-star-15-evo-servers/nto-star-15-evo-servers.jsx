import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-evo-servers');
}

export default function NtoStar15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-evo-servers" />;
}
