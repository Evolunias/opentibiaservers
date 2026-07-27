import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-sweden');
}

export default function UnlineSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-sweden" />;
}
