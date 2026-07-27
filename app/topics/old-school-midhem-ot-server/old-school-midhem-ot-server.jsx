import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-ot-server');
}

export default function OldSchoolMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-ot-server" />;
}
