import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-sweden');
}

export default function CyntaraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-sweden" />;
}
