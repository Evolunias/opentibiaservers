import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-1-seasonal-server');
}

export default function ClassickDrakoria71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-1-seasonal-server" />;
}
