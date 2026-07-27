import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-private-server');
}

export default function CurrentSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-private-server" />;
}
