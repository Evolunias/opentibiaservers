import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-evo-server');
}

export default function Tibianus84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-evo-server" />;
}
