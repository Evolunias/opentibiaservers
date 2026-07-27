import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-evo-server');
}

export default function Cyntara15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-evo-server" />;
}
