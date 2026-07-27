import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-ot');
}

export default function OldSchoolThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-ot" />;
}
