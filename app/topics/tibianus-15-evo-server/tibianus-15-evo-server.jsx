import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-evo-server');
}

export default function Tibianus15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-evo-server" />;
}
