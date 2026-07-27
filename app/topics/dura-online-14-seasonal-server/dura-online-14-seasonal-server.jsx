import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-seasonal-server');
}

export default function DuraOnline14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-seasonal-server" />;
}
