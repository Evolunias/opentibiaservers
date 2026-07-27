import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-evo-server');
}

export default function Cyntara84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-evo-server" />;
}
