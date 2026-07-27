import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-server');
}

export default function NewSeasonNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-server" />;
}
