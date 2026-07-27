import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-create-account');
}

export default function CustomElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-create-account" />;
}
