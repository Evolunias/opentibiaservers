import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-uk');
}

export default function BaiakRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-uk" />;
}
