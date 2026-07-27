import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-login');
}

export default function BestNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-login" />;
}
