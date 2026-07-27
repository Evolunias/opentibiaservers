import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-create-account');
}

export default function NewSeasonEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-create-account" />;
}
