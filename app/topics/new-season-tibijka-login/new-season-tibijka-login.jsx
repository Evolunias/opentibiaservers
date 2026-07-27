import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-login');
}

export default function NewSeasonTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-login" />;
}
