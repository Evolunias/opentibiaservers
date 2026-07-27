import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-evo-server');
}

export default function Tibianus86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-evo-server" />;
}
