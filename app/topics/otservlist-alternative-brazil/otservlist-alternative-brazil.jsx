import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-brazil');
}

export default function OtservlistAlternativeBrazilKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-brazil" />;
}
