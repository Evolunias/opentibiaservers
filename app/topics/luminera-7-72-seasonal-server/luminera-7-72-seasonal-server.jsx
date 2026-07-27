import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-seasonal-server');
}

export default function Luminera772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-seasonal-server" />;
}
