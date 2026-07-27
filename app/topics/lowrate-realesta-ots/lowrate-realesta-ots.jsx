import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-ots');
}

export default function LowrateRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-ots" />;
}
