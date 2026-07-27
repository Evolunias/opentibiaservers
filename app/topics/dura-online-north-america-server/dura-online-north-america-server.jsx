import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-north-america-server');
}

export default function DuraOnlineNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-north-america-server" />;
}
