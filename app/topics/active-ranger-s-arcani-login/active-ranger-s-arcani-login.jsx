import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-login');
}

export default function ActiveRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-login" />;
}
