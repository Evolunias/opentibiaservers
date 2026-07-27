import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-south-america');
}

export default function RealestaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-south-america" />;
}
