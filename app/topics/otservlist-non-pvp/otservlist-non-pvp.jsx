import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-non-pvp');
}

export default function OtservlistNonPvpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-non-pvp" />;
}
