import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-create-account');
}

export default function ActiveRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-realera-create-account" />;
}
