import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-98-evo-server');
}

export default function Unline1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-98-evo-server" />;
}
