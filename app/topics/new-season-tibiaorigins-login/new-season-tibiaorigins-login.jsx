import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-login');
}

export default function NewSeasonTibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-login" />;
}
