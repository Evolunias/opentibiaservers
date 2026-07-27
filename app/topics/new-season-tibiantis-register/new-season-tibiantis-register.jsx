import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-register');
}

export default function NewSeasonTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-register" />;
}
