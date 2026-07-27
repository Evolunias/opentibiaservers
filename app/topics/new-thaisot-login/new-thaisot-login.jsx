import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-login');
}

export default function NewThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-login" />;
}
