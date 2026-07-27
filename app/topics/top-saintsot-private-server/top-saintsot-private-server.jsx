import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-private-server');
}

export default function TopSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-private-server" />;
}
