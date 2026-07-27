import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-create-account');
}

export default function FreshStartBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-create-account" />;
}
