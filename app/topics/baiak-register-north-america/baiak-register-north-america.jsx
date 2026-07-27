import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-north-america');
}

export default function BaiakRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-north-america" />;
}
