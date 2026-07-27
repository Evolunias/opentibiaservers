import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-usa');
}

export default function BaiakRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-usa" />;
}
