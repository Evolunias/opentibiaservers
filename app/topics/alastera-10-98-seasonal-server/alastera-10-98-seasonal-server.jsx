import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-seasonal-server');
}

export default function Alastera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-seasonal-server" />;
}
