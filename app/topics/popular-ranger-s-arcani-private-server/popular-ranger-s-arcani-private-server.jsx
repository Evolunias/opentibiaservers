import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-private-server');
}

export default function PopularRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-private-server" />;
}
