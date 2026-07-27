import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-login');
}

export default function LowrateRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-login" />;
}
