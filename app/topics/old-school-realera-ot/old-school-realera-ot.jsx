import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-ot');
}

export default function OldSchoolRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-ot" />;
}
