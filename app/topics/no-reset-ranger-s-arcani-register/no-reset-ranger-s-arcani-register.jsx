import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-register');
}

export default function NoResetRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-register" />;
}
