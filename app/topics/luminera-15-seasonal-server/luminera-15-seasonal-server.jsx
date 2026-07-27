import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-seasonal-server');
}

export default function Luminera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-seasonal-server" />;
}
