import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-evo-server');
}

export default function Unline86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-evo-server" />;
}
