import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-season');
}

export default function NepreniaSeasonKeywordPage() {
  return <StaticKeywordPage slug="neprenia-season" />;
}
