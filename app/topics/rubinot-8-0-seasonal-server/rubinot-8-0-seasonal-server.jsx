import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-seasonal-server');
}

export default function Rubinot80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-seasonal-server" />;
}
