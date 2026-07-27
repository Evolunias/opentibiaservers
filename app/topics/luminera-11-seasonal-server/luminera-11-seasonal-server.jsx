import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-seasonal-server');
}

export default function Luminera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-seasonal-server" />;
}
