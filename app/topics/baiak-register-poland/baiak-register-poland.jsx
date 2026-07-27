import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-register-poland');
}

export default function BaiakRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-register-poland" />;
}
