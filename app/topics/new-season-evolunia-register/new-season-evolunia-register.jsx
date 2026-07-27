import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-register');
}

export default function NewSeasonEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-register" />;
}
