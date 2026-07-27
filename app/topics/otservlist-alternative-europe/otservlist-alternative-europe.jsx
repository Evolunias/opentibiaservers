import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-europe');
}

export default function OtservlistAlternativeEuropeKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-europe" />;
}
