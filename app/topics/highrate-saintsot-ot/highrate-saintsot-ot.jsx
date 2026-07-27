import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-ot');
}

export default function HighrateSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-ot" />;
}
