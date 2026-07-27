import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-evo-server');
}

export default function Cyntara86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-evo-server" />;
}
