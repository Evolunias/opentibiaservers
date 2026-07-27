import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-seasonal-server');
}

export default function NtoStar14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-seasonal-server" />;
}
