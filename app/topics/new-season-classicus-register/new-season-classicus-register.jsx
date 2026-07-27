import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-register');
}

export default function NewSeasonClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-register" />;
}
