import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-seasonal-server');
}

export default function Realesta12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-seasonal-server" />;
}
