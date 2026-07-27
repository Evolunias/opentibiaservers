import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-evo-server');
}

export default function Tibianus12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-evo-server" />;
}
