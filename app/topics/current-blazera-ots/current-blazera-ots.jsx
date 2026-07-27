import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-ots');
}

export default function CurrentBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-ots" />;
}
