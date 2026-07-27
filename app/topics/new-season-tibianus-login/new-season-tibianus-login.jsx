import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-login');
}

export default function NewSeasonTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-login" />;
}
