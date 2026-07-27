import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-seasonal-server');
}

export default function Classicus74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-seasonal-server" />;
}
