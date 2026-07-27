import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-seasonal-server');
}

export default function Luminera81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-seasonal-server" />;
}
