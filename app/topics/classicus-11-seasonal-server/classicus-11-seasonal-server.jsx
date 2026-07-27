import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-seasonal-server');
}

export default function Classicus11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-seasonal-server" />;
}
