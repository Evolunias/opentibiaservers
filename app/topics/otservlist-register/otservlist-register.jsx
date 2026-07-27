import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-register');
}

export default function OtservlistRegisterKeywordPage() {
  return <StaticKeywordPage slug="otservlist-register" />;
}
