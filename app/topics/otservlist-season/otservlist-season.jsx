import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-season');
}

export default function OtservlistSeasonKeywordPage() {
  return <StaticKeywordPage slug="otservlist-season" />;
}
