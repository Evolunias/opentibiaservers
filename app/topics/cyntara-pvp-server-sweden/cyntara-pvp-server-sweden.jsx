import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-sweden');
}

export default function CyntaraPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-sweden" />;
}
