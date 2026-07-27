import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-seasonal-server');
}

export default function Classicus772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-seasonal-server" />;
}
