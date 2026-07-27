import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-create-account');
}

export default function NewElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-create-account" />;
}
