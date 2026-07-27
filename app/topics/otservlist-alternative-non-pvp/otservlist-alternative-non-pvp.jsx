import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-non-pvp');
}

export default function OtservlistAlternativeNonPvpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-non-pvp" />;
}
