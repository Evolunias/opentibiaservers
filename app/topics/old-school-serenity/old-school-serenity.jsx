import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity');
}

export default function OldSchoolSerenityKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity" />;
}
