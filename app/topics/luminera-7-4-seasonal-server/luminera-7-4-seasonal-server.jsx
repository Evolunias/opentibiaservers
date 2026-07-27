import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-seasonal-server');
}

export default function Luminera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-seasonal-server" />;
}
