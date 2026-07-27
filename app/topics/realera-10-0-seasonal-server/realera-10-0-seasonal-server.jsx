import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-seasonal-server');
}

export default function Realera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-seasonal-server" />;
}
