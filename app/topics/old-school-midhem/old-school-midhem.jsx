import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem');
}

export default function OldSchoolMidhemKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem" />;
}
