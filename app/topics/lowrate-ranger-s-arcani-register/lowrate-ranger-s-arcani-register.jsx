import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-register');
}

export default function LowrateRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-register" />;
}
