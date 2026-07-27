import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-seasonal-server');
}

export default function Classicus14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-seasonal-server" />;
}
