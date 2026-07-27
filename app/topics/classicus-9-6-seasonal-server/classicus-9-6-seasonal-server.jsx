import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-seasonal-server');
}

export default function Classicus96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-seasonal-server" />;
}
