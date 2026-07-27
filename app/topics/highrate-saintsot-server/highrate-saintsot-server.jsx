import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-server');
}

export default function HighrateSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-server" />;
}
