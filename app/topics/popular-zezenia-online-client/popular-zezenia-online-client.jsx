import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-client');
}

export default function PopularZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-client" />;
}
