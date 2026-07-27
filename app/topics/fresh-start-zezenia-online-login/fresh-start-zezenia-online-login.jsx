import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-login');
}

export default function FreshStartZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-login" />;
}
