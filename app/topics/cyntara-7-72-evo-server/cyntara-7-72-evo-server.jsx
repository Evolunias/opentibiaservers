import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-evo-server');
}

export default function Cyntara772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-evo-server" />;
}
