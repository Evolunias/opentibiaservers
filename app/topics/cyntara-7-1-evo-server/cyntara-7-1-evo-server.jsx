import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-evo-server');
}

export default function Cyntara71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-evo-server" />;
}
