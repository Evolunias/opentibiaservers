import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-ot');
}

export default function OldSchoolMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-ot" />;
}
