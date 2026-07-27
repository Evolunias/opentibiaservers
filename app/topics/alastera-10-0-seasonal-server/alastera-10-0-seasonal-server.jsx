import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-seasonal-server');
}

export default function Alastera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-seasonal-server" />;
}
