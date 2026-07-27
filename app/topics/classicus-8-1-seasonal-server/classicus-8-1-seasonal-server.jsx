import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-seasonal-server');
}

export default function Classicus81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-seasonal-server" />;
}
