import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-evo-server');
}

export default function Cyntara1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-evo-server" />;
}
