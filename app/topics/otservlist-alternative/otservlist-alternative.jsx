import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative');
}

export default function OtservlistAlternativeKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative" />;
}
