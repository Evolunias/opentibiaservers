import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-ot');
}

export default function LowrateSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-ot" />;
}
