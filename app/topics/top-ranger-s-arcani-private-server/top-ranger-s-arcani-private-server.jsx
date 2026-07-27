import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-private-server');
}

export default function TopRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-private-server" />;
}
