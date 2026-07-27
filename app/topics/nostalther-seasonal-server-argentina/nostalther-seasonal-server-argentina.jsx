import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-argentina');
}

export default function NostaltherSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-argentina" />;
}
