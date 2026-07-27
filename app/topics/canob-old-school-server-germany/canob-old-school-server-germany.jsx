import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-germany');
}

export default function CanobOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-germany" />;
}
