import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-server');
}

export default function OldSchoolMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-server" />;
}
