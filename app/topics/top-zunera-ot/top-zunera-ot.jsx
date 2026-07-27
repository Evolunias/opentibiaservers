import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot');
}

export default function TopZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot" />;
}
