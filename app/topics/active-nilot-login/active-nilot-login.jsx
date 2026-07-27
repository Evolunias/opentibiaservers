import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-login');
}

export default function ActiveNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-login" />;
}
