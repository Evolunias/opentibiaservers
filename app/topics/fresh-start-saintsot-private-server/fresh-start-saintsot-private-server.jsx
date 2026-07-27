import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-private-server');
}

export default function FreshStartSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-private-server" />;
}
