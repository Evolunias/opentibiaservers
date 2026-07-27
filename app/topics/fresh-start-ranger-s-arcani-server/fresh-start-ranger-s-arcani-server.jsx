import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-server');
}

export default function FreshStartRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-server" />;
}
