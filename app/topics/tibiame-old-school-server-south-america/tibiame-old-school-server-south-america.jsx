import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-old-school-server-south-america');
}

export default function TibiameOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-old-school-server-south-america" />;
}
