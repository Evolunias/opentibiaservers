import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-0-seasonal-server');
}

export default function Classicus80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-0-seasonal-server" />;
}
