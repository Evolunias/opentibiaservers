import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-ots');
}

export default function NewSeasonNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-ots" />;
}
