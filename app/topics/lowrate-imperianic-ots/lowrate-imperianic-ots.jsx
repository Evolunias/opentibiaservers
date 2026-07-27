import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-ots');
}

export default function LowrateImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-ots" />;
}
