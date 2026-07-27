import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-ot');
}

export default function LowrateNilotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-ot" />;
}
