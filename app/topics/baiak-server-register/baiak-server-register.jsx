import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-register');
}

export default function BaiakServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-register" />;
}
