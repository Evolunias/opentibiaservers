import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-login');
}

export default function NewSeasonEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-login" />;
}
