import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-seasonal-server');
}

export default function Classicus71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-seasonal-server" />;
}
