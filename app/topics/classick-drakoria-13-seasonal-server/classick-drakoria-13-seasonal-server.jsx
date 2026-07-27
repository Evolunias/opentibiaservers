import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-seasonal-server');
}

export default function ClassickDrakoria13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-seasonal-server" />;
}
