import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-create-account');
}

export default function CustomThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-create-account" />;
}
