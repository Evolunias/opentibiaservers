import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-server');
}

export default function CustomRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-server" />;
}
