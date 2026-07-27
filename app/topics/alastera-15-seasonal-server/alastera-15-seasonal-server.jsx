import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-seasonal-server');
}

export default function Alastera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-seasonal-server" />;
}
