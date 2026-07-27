import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot');
}

export default function FreshStartZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot" />;
}
