import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-ots');
}

export default function OldSchoolSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-ots" />;
}
