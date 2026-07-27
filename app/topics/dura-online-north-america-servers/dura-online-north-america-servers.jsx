import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-north-america-servers');
}

export default function DuraOnlineNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-north-america-servers" />;
}
