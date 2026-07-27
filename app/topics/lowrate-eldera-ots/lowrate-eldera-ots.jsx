import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-ots');
}

export default function LowrateElderaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-ots" />;
}
