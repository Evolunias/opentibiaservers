import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-ot-server');
}

export default function NewSeasonTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-ot-server" />;
}
