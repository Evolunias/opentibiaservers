import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-client');
}

export default function HighrateSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-client" />;
}
