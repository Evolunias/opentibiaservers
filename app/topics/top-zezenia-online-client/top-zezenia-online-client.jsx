import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-client');
}

export default function TopZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-client" />;
}
