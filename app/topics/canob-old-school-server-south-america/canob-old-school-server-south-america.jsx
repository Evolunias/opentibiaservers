import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-south-america');
}

export default function CanobOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-south-america" />;
}
