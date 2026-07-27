import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-north-america');
}

export default function RealeraOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-north-america" />;
}
