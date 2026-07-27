import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-north-america');
}

export default function TibianusOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-north-america" />;
}
