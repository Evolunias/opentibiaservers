import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-mexico');
}

export default function CanobOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-mexico" />;
}
