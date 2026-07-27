import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-seasonal-server');
}

export default function DuraOnline96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-seasonal-server" />;
}
