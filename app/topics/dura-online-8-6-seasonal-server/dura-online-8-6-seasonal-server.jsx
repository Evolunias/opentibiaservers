import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-seasonal-server');
}

export default function DuraOnline86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-seasonal-server" />;
}
