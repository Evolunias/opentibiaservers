import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-client');
}

export default function DuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="dura-online-client" />;
}
