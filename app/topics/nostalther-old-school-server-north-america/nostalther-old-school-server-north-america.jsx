import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-north-america');
}

export default function NostaltherOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-north-america" />;
}
