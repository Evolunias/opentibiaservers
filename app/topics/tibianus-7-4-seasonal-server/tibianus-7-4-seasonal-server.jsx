import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-seasonal-server');
}

export default function Tibianus74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-seasonal-server" />;
}
