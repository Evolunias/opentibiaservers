import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-client');
}

export default function FreshStartZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-client" />;
}
