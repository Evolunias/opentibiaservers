import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-1-seasonal-server');
}

export default function DuraOnline81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-1-seasonal-server" />;
}
