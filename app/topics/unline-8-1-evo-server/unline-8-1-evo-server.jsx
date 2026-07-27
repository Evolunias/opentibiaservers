import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-evo-server');
}

export default function Unline81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-evo-server" />;
}
