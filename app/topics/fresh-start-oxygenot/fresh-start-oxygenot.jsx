import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot');
}

export default function FreshStartOxygenotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot" />;
}
