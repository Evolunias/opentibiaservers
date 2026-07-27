import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-register');
}

export default function CustomDuraOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-register" />;
}
