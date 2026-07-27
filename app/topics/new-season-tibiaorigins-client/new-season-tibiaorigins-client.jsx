import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-client');
}

export default function NewSeasonTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-client" />;
}
