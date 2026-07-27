import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-ots');
}

export default function FreshStartOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-ots" />;
}
