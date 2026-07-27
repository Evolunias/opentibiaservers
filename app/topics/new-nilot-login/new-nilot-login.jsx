import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-login');
}

export default function NewNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-login" />;
}
