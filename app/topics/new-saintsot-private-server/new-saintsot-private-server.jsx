import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-private-server');
}

export default function NewSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-private-server" />;
}
