import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-ot-server');
}

export default function CustomRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-ot-server" />;
}
