import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-server');
}

export default function NewSeasonTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-server" />;
}
