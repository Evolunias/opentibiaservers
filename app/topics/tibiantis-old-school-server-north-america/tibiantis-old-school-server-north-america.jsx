import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-north-america');
}

export default function TibiantisOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-north-america" />;
}
