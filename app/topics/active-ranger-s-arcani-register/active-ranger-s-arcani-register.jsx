import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-register');
}

export default function ActiveRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-register" />;
}
