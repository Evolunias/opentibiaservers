import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-sweden');
}

export default function AlasteraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-sweden" />;
}
