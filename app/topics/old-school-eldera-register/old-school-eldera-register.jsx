import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-register');
}

export default function OldSchoolElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-register" />;
}
