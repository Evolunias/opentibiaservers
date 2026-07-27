import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-private-server');
}

export default function NewSeasonTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-private-server" />;
}
