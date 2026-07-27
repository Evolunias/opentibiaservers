import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-seasonal-server');
}

export default function Classicus76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-seasonal-server" />;
}
