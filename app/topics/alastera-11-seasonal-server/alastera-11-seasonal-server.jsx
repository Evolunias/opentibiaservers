import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-seasonal-server');
}

export default function Alastera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-seasonal-server" />;
}
