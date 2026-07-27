import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-create-account');
}

export default function ActiveThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-create-account" />;
}
