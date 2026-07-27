import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-canada');
}

export default function CanobOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-canada" />;
}
