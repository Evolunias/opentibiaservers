import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-ots');
}

export default function OldSchoolMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-ots" />;
}
