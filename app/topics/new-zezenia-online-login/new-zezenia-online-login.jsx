import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-login');
}

export default function NewZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-login" />;
}
