import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-servers-south-america');
}

export default function SeasonalServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-servers-south-america" />;
}
