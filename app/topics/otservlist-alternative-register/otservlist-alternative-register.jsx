import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-register');
}

export default function OtservlistAlternativeRegisterKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-register" />;
}
