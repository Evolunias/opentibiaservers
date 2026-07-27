import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-register');
}

export default function CustomRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-register" />;
}
