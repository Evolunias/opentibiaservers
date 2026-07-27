import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-evo-server');
}

export default function Cyntara12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-evo-server" />;
}
