import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot');
}

export default function BestNilotKeywordPage() {
  return <StaticKeywordPage slug="best-nilot" />;
}
