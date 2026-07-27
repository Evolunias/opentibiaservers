import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-register');
}

export default function HighrateRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-register" />;
}
