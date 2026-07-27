import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-ots');
}

export default function OldSchoolThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-ots" />;
}
