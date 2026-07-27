import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-evo-server');
}

export default function Cyntara14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-evo-server" />;
}
