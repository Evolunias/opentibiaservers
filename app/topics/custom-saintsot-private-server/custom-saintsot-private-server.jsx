import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-private-server');
}

export default function CustomSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-private-server" />;
}
