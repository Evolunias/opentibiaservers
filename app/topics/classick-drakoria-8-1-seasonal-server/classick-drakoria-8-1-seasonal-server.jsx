import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-seasonal-server');
}

export default function ClassickDrakoria81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-seasonal-server" />;
}
