import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-create-account');
}

export default function RealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="realera-create-account" />;
}
