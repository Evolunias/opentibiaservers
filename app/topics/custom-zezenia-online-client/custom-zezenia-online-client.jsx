import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-client');
}

export default function CustomZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-client" />;
}
