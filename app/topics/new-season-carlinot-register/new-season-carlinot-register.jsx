import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-register');
}

export default function NewSeasonCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-register" />;
}
