import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-usa');
}

export default function CanobOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-usa" />;
}
