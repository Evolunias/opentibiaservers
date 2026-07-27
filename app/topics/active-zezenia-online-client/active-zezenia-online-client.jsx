import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-client');
}

export default function ActiveZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-client" />;
}
