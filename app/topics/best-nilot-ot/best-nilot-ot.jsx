import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-ot');
}

export default function BestNilotOtKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-ot" />;
}
