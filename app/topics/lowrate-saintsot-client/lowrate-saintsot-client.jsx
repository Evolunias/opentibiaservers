import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-client');
}

export default function LowrateSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-client" />;
}
