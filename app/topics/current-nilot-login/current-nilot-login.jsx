import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-login');
}

export default function CurrentNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-login" />;
}
