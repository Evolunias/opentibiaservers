import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-evo-server');
}

export default function Tibianus96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-evo-server" />;
}
