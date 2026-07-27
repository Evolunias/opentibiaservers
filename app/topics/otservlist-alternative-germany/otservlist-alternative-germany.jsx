import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-germany');
}

export default function OtservlistAlternativeGermanyKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-germany" />;
}
