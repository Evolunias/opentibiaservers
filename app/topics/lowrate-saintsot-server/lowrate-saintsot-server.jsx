import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-server');
}

export default function LowrateSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-server" />;
}
