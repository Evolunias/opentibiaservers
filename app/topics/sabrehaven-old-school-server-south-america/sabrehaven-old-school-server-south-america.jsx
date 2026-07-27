import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-south-america');
}

export default function SabrehavenOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-south-america" />;
}
