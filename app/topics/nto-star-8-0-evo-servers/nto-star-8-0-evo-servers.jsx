import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-0-evo-servers');
}

export default function NtoStar80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-0-evo-servers" />;
}
