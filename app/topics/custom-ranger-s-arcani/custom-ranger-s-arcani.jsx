import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani');
}

export default function CustomRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani" />;
}
