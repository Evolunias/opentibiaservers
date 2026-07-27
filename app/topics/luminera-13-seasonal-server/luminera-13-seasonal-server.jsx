import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-seasonal-server');
}

export default function Luminera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-seasonal-server" />;
}
