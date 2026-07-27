import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-client');
}

export default function TopDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-client" />;
}
