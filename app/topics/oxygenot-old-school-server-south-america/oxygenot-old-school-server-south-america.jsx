import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-south-america');
}

export default function OxygenotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-south-america" />;
}
