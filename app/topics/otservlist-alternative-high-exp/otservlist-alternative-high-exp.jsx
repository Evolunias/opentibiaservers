import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-high-exp');
}

export default function OtservlistAlternativeHighExpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-high-exp" />;
}
