import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-argentina');
}

export default function BaiakRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-argentina" />;
}
