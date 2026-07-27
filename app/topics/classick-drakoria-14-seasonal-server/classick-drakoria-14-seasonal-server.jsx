import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-seasonal-server');
}

export default function ClassickDrakoria14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-seasonal-server" />;
}
