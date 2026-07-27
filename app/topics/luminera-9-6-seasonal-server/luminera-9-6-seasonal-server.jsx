import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-seasonal-server');
}

export default function Luminera96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-seasonal-server" />;
}
