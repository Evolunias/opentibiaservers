import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-ots');
}

export default function TopZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-ots" />;
}
