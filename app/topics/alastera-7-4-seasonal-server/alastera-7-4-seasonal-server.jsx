import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-seasonal-server');
}

export default function Alastera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-seasonal-server" />;
}
