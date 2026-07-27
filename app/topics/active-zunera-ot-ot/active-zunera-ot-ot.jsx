import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-ot');
}

export default function ActiveZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-ot" />;
}
