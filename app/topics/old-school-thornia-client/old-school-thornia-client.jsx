import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-client');
}

export default function OldSchoolThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-client" />;
}
