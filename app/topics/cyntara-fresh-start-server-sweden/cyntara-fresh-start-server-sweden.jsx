import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-sweden');
}

export default function CyntaraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-sweden" />;
}
