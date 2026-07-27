import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-register');
}

export default function OldSchoolCanobRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-register" />;
}
