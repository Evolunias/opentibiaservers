import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-seasonal-server');
}

export default function Luminera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-seasonal-server" />;
}
