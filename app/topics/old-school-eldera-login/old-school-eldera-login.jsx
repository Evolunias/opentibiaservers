import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-login');
}

export default function OldSchoolElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-login" />;
}
