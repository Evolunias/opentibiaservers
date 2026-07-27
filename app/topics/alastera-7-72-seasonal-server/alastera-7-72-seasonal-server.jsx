import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-seasonal-server');
}

export default function Alastera772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-seasonal-server" />;
}
