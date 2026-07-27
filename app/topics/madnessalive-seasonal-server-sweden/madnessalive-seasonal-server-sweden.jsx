import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-seasonal-server-sweden');
}

export default function MadnessaliveSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-seasonal-server-sweden" />;
}
