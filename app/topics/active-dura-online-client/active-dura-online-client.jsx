import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-client');
}

export default function ActiveDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-client" />;
}
