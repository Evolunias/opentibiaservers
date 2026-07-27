import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-ots');
}

export default function FreshStartZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-ots" />;
}
