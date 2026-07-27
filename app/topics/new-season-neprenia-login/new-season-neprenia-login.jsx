import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-login');
}

export default function NewSeasonNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-login" />;
}
