import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot');
}

export default function LowrateNilotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot" />;
}
