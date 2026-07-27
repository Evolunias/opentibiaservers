import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-pvp');
}

export default function OtservlistPvpKeywordPage() {
  return <StaticKeywordPage slug="otservlist-pvp" />;
}
