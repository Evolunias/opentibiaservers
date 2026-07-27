import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-ot');
}

export default function FreshStartNilotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-ot" />;
}
