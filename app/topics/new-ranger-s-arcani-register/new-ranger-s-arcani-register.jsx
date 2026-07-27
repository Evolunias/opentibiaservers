import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-register');
}

export default function NewRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-register" />;
}
