import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-evo-server');
}

export default function Cyntara81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-evo-server" />;
}
