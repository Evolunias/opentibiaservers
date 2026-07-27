import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-register');
}

export default function NewSeasonMistOfDeathRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-register" />;
}
