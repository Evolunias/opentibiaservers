import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-dura-online-server');
}

export default function SeasonalDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-dura-online-server" />;
}
