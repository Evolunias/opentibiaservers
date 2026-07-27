import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-seasonal-server');
}

export default function NtoStar84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-seasonal-server" />;
}
