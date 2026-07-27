import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-evo-server');
}

export default function Unline100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-evo-server" />;
}
