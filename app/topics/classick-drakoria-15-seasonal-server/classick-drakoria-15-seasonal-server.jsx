import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-seasonal-server');
}

export default function ClassickDrakoria15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-seasonal-server" />;
}
