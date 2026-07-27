import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-sweden');
}

export default function CyntaraNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-sweden" />;
}
