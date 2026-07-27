import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-seasonal-server');
}

export default function Alastera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-seasonal-server" />;
}
