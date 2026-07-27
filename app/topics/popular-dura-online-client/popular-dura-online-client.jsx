import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-client');
}

export default function PopularDuraOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-client" />;
}
