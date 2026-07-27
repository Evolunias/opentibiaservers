import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-ot');
}

export default function TopNilotOtKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-ot" />;
}
