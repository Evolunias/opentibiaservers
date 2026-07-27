import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-latin-america');
}

export default function BaiakRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-latin-america" />;
}
