import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-seasonal-server');
}

export default function Alastera71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-seasonal-server" />;
}
