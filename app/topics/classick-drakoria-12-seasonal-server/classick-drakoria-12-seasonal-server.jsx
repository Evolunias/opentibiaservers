import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-seasonal-server');
}

export default function ClassickDrakoria12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-seasonal-server" />;
}
