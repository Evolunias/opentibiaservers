import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-south-america');
}

export default function NostaltherOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-south-america" />;
}
