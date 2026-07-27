import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-seasonal-server');
}

export default function Miracle100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-seasonal-server" />;
}
