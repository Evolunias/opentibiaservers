import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-ot-server');
}

export default function NewRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-ot-server" />;
}
