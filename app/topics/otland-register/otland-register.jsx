import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-register');
}

export default function OtlandRegisterKeywordPage() {
  return <StaticKeywordPage slug="otland-register" />;
}
