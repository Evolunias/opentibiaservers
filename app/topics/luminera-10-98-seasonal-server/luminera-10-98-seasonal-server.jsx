import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-seasonal-server');
}

export default function Luminera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-seasonal-server" />;
}
