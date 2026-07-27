import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-sweden');
}

export default function OtservlistAlternativeSwedenKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-sweden" />;
}
