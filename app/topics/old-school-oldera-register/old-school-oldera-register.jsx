import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-register');
}

export default function OldSchoolOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-register" />;
}
