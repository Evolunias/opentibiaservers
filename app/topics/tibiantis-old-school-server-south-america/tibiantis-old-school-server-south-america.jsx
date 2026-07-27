import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-south-america');
}

export default function TibiantisOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-south-america" />;
}
