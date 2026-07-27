import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-seasonal-server');
}

export default function Classicus15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-seasonal-server" />;
}
