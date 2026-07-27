import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-seasonal-server');
}

export default function ClassickDrakoria84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-seasonal-server" />;
}
