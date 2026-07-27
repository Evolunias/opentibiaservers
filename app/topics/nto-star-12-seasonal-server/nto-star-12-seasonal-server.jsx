import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-seasonal-server');
}

export default function NtoStar12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-seasonal-server" />;
}
