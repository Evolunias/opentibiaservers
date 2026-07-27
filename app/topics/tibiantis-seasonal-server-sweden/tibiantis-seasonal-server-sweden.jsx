import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-sweden');
}

export default function TibiantisSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-sweden" />;
}
