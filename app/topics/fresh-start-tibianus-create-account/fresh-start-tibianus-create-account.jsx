import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-create-account');
}

export default function FreshStartTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-create-account" />;
}
