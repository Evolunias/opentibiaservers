import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-create-account');
}

export default function FreshStartElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-create-account" />;
}
