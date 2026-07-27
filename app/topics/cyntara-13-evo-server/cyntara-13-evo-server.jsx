import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-evo-server');
}

export default function Cyntara13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-evo-server" />;
}
