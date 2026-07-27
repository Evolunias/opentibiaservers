import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-seasonal-server');
}

export default function Classicus12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-seasonal-server" />;
}
