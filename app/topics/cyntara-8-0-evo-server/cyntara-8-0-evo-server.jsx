import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-evo-server');
}

export default function Cyntara80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-evo-server" />;
}
