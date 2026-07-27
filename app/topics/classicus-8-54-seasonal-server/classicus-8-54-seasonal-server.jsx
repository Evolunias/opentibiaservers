import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-seasonal-server');
}

export default function Classicus854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-seasonal-server" />;
}
