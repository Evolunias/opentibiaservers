import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-private-server');
}

export default function ActiveSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-private-server" />;
}
