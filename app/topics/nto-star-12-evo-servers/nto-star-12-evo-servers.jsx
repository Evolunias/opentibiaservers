import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-evo-servers');
}

export default function NtoStar12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-evo-servers" />;
}
