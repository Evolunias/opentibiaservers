import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-login');
}

export default function LowrateNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-login" />;
}
