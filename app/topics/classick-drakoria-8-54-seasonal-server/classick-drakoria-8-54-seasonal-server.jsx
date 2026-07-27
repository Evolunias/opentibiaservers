import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-54-seasonal-server');
}

export default function ClassickDrakoria854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-54-seasonal-server" />;
}
