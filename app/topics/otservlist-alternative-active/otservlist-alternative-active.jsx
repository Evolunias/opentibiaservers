import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-active');
}

export default function OtservlistAlternativeActiveKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-active" />;
}
