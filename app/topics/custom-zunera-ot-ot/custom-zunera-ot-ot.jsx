import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-ot');
}

export default function CustomZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-ot" />;
}
