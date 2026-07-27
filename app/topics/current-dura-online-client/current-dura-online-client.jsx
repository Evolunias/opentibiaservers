import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-client');
}

export default function CurrentDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-client" />;
}
