import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-ot');
}

export default function OldSchoolRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-ot" />;
}
