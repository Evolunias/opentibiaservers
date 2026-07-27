import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-ot-server');
}

export default function LowrateSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-ot-server" />;
}
