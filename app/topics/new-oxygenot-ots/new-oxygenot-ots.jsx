import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-ots');
}

export default function NewOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-ots" />;
}
