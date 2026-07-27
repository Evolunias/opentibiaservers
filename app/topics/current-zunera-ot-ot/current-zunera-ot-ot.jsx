import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-ot');
}

export default function CurrentZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-ot" />;
}
