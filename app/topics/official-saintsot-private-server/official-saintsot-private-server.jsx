import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-private-server');
}

export default function OfficialSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-private-server" />;
}
