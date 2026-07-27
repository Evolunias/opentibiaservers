import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-mexico');
}

export default function BaiakRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-mexico" />;
}
