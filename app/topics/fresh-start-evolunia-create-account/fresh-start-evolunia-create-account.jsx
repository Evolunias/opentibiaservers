import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-create-account');
}

export default function FreshStartEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-create-account" />;
}
