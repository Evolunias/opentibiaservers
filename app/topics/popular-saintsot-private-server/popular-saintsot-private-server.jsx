import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-private-server');
}

export default function PopularSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-private-server" />;
}
