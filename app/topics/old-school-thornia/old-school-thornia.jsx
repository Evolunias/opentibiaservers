import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia');
}

export default function OldSchoolThorniaKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia" />;
}
