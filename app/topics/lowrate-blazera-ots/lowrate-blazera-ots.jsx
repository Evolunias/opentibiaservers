import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-ots');
}

export default function LowrateBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-ots" />;
}
