import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-ots');
}

export default function NewRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-ots" />;
}
