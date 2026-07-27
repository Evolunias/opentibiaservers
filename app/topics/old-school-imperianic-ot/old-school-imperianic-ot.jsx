import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-imperianic-ot');
}

export default function OldSchoolImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-imperianic-ot" />;
}
