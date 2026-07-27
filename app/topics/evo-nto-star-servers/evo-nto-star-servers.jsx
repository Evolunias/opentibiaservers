import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-nto-star-servers');
}

export default function EvoNtoStarServersKeywordPage() {
  return <StaticKeywordPage slug="evo-nto-star-servers" />;
}
