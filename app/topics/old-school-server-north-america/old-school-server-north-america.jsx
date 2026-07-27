import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-north-america');
}

export default function OldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-north-america" />;
}
