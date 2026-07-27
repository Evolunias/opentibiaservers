import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-poland');
}

export default function OtservlistAlternativePolandKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-poland" />;
}
