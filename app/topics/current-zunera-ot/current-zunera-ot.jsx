import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot');
}

export default function CurrentZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot" />;
}
