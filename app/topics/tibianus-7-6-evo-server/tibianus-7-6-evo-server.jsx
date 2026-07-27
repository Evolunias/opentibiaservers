import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-evo-server');
}

export default function Tibianus76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-evo-server" />;
}
