import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-server');
}

export default function PopularRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-server" />;
}
