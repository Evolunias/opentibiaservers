import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-evo-server');
}

export default function Tibianus1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-evo-server" />;
}
