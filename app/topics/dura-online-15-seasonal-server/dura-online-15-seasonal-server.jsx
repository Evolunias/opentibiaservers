import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-seasonal-server');
}

export default function DuraOnline15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-seasonal-server" />;
}
