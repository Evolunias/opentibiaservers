import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-ots');
}

export default function FreshStartRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-ots" />;
}
