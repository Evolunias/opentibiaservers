import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-login');
}

export default function OldSchoolThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-login" />;
}
