import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-register');
}

export default function OldSchoolMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-register" />;
}
