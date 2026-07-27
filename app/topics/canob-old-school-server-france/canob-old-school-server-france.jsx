import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-old-school-server-france');
}

export default function CanobOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-old-school-server-france" />;
}
