import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-client');
}

export default function NewDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-client" />;
}
