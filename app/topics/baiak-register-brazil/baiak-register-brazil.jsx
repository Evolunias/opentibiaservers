import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-brazil');
}

export default function BaiakRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-brazil" />;
}
