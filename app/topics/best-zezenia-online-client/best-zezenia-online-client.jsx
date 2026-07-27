import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-client');
}

export default function BestZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-client" />;
}
