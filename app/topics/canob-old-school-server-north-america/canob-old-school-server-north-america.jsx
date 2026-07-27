import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-north-america');
}

export default function CanobOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-north-america" />;
}
