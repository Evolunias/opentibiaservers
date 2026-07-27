import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-evo-server');
}

export default function Tibianus80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-evo-server" />;
}
