import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-ot');
}

export default function OldSchoolTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-ot" />;
}
