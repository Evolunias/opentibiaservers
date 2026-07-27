import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-poland');
}

export default function CanobOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-poland" />;
}
