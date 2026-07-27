import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-seasonal-server');
}

export default function Luminera84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-seasonal-server" />;
}
