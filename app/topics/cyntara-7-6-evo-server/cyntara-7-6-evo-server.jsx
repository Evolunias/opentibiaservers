import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-evo-server');
}

export default function Cyntara76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-evo-server" />;
}
