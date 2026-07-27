import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-client');
}

export default function NewSeasonNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-client" />;
}
