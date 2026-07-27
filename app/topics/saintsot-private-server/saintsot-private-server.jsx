import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-private-server');
}

export default function SaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-private-server" />;
}
