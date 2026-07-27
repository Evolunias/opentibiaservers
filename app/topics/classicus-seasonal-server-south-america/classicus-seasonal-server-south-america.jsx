import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-seasonal-server-south-america');
}

export default function ClassicusSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-seasonal-server-south-america" />;
}
