import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani');
}

export default function FreshStartRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani" />;
}
