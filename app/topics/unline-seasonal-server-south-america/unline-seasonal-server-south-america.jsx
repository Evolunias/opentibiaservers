import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-seasonal-server-south-america');
}

export default function UnlineSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-seasonal-server-south-america" />;
}
