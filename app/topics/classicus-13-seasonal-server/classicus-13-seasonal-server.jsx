import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-seasonal-server');
}

export default function Classicus13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-seasonal-server" />;
}
