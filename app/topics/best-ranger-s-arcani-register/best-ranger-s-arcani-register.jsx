import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-register');
}

export default function BestRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-register" />;
}
