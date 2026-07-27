import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-evo-server');
}

export default function Unline14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-evo-server" />;
}
