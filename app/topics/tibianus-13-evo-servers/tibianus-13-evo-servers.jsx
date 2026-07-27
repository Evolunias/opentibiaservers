import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-evo-servers');
}

export default function Tibianus13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-evo-servers" />;
}
