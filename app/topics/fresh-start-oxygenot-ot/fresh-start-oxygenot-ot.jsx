import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-ot');
}

export default function FreshStartOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-ot" />;
}
