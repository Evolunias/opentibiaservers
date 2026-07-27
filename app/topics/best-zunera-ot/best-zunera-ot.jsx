import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot');
}

export default function BestZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot" />;
}
