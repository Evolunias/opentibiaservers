import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-north-america');
}

export default function KasteriaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-north-america" />;
}
