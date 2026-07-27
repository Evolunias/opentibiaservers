import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-register');
}

export default function OldSchoolNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-register" />;
}
