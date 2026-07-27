import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-seasonal-server-sweden');
}

export default function CyntaraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-seasonal-server-sweden" />;
}
