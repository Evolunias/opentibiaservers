import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-evo-server');
}

export default function Unline76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-evo-server" />;
}
