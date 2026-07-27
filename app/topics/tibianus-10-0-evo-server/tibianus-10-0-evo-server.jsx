import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-evo-server');
}

export default function Tibianus100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-evo-server" />;
}
