import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-private-server');
}

export default function HighrateSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-private-server" />;
}
