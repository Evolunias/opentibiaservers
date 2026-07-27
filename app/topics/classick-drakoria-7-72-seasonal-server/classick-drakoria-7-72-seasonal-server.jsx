import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-seasonal-server');
}

export default function ClassickDrakoria772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-seasonal-server" />;
}
