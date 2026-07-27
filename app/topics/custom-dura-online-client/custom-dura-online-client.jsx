import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-client');
}

export default function CustomDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-client" />;
}
