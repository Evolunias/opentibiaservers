import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-evo-server');
}

export default function Tibianus81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-evo-server" />;
}
