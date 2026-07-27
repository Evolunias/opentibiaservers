import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-98-seasonal-server');
}

export default function Classicus1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-98-seasonal-server" />;
}
