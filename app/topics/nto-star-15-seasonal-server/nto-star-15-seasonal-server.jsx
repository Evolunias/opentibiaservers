import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-seasonal-server');
}

export default function NtoStar15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-seasonal-server" />;
}
