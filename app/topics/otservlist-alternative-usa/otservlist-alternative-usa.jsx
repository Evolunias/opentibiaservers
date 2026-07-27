import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-usa');
}

export default function OtservlistAlternativeUsaKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-usa" />;
}
