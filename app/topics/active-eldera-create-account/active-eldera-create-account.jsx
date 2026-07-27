import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-create-account');
}

export default function ActiveElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-create-account" />;
}
