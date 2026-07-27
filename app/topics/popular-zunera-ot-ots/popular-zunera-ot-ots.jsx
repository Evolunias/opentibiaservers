import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-ots');
}

export default function PopularZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-ots" />;
}
