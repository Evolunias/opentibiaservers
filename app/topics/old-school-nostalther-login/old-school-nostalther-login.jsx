import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-login');
}

export default function OldSchoolNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-login" />;
}
