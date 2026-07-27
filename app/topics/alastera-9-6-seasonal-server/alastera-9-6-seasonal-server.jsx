import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-seasonal-server');
}

export default function Alastera96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-seasonal-server" />;
}
