import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-ot-server');
}

export default function HighrateSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-ot-server" />;
}
