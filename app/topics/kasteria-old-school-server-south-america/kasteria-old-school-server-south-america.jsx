import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-south-america');
}

export default function KasteriaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-south-america" />;
}
