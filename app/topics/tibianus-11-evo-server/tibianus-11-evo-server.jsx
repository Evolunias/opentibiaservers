import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-evo-server');
}

export default function Tibianus11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-evo-server" />;
}
