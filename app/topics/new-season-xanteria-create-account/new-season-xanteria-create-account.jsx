import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-create-account');
}

export default function NewSeasonXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-create-account" />;
}
