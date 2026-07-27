import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-south-america');
}

export default function OldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-south-america" />;
}
