import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-private-server');
}

export default function LowrateSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-private-server" />;
}
