import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-ot');
}

export default function NewSeasonNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-ot" />;
}
