import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-create-account');
}

export default function FreshStartTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-create-account" />;
}
