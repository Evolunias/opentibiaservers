import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-register');
}

export default function NewZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-register" />;
}
