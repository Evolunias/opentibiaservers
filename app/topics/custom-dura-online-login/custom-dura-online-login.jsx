import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-login');
}

export default function CustomDuraOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-login" />;
}
