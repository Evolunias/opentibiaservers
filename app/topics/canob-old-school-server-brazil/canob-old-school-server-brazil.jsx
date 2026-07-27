import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-brazil');
}

export default function CanobOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-brazil" />;
}
