import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-seasonal-server-sweden');
}

export default function MidhemSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-seasonal-server-sweden" />;
}
