import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-north-america');
}

export default function OldSchoolOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-north-america" />;
}
