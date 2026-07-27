import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-sweden');
}

export default function CyntaraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-sweden" />;
}
