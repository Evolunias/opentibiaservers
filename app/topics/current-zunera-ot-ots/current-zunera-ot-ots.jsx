import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-ots');
}

export default function CurrentZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-ots" />;
}
