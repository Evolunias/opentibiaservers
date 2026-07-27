import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-canada');
}

export default function BaiakRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-canada" />;
}
