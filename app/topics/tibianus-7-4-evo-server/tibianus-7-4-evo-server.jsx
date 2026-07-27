import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-evo-server');
}

export default function Tibianus74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-evo-server" />;
}
