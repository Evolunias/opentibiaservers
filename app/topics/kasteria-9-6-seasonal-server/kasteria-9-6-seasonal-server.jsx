import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-seasonal-server');
}

export default function Kasteria96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-seasonal-server" />;
}
