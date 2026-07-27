import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-register');
}

export default function TopRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-register" />;
}
