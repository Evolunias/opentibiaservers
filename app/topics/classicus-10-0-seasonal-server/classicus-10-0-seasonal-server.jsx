import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-seasonal-server');
}

export default function Classicus100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-seasonal-server" />;
}
