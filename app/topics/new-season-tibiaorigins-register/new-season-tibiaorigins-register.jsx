import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-register');
}

export default function NewSeasonTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-register" />;
}
