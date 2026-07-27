import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani');
}

export default function ActiveRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani" />;
}
