import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-create-account');
}

export default function CustomClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-create-account" />;
}
