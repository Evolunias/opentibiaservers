import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-north-america');
}

export default function TibijkaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-north-america" />;
}
