import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-seasonal-server');
}

export default function DuraOnline13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-seasonal-server" />;
}
