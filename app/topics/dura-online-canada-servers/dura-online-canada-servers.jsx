import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-canada-servers');
}

export default function DuraOnlineCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-canada-servers" />;
}
