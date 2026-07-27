import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-register');
}

export default function OtServerListRegisterKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-register" />;
}
