import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-pvp');
}

export default function OtservlistAlternativePvpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-pvp" />;
}
