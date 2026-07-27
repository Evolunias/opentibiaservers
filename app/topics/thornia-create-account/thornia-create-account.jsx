import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-create-account');
}

export default function ThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="thornia-create-account" />;
}
