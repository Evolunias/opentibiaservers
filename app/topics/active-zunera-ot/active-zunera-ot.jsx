import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot');
}

export default function ActiveZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot" />;
}
