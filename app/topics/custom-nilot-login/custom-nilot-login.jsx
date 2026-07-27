import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-login');
}

export default function CustomNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-login" />;
}
