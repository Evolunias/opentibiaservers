import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-login');
}

export default function OldSchoolMidhemLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-login" />;
}
