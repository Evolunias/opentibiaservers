import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-private-server');
}

export default function NewRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-private-server" />;
}
