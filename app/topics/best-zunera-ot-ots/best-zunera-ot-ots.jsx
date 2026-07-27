import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-ots');
}

export default function BestZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-ots" />;
}
