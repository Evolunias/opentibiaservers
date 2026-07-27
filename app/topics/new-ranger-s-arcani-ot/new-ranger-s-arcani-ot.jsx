import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-ot');
}

export default function NewRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-ot" />;
}
