import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-sweden');
}

export default function CyntaraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-sweden" />;
}
