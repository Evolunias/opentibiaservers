import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-client');
}

export default function FreshStartDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-client" />;
}
