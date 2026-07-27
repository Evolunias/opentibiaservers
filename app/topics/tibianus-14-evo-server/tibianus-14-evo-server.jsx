import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-evo-server');
}

export default function Tibianus14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-evo-server" />;
}
