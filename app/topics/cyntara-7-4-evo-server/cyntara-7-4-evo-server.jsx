import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-evo-server');
}

export default function Cyntara74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-evo-server" />;
}
