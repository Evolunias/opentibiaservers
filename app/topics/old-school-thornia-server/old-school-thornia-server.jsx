import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-server');
}

export default function OldSchoolThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-server" />;
}
