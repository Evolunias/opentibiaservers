import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-evo-server');
}

export default function Tibianus13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-evo-server" />;
}
