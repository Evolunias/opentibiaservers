import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-sweden');
}

export default function CyntaraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-sweden" />;
}
