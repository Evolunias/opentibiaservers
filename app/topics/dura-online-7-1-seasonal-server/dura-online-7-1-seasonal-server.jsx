import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-seasonal-server');
}

export default function DuraOnline71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-seasonal-server" />;
}
