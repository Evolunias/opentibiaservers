import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani');
}

export default function NewRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani" />;
}
