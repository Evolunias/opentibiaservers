import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-private-server');
}

export default function ActiveRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-private-server" />;
}
