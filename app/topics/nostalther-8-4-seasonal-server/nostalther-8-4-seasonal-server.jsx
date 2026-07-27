import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-seasonal-server');
}

export default function Nostalther84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-seasonal-server" />;
}
