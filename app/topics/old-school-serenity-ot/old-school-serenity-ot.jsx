import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-serenity-ot');
}

export default function OldSchoolSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-serenity-ot" />;
}
