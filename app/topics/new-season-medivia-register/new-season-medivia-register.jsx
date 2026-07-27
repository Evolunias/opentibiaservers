import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-register');
}

export default function NewSeasonMediviaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-register" />;
}
