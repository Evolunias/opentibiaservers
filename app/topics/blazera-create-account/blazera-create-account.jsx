import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-create-account');
}

export default function BlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="blazera-create-account" />;
}
