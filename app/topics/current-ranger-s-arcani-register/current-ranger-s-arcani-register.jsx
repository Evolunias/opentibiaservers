import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-register');
}

export default function CurrentRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-register" />;
}
