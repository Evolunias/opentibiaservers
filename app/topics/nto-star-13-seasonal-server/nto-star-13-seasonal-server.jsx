import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-seasonal-server');
}

export default function NtoStar13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-seasonal-server" />;
}
