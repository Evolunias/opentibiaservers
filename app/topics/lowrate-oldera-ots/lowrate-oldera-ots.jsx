import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-ots');
}

export default function LowrateOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-ots" />;
}
