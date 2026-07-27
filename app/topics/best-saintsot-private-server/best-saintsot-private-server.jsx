import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-private-server');
}

export default function BestSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-private-server" />;
}
