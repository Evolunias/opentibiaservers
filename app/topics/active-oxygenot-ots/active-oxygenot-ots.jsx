import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-ots');
}

export default function ActiveOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-ots" />;
}
