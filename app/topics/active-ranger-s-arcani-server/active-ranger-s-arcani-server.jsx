import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-server');
}

export default function ActiveRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-server" />;
}
