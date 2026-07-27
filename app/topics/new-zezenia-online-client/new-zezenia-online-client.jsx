import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-client');
}

export default function NewZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-client" />;
}
