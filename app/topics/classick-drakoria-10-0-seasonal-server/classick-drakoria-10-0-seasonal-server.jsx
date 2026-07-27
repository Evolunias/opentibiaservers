import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-seasonal-server');
}

export default function ClassickDrakoria100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-seasonal-server" />;
}
