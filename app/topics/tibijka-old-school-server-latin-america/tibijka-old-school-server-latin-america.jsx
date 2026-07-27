import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-latin-america');
}

export default function TibijkaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-latin-america" />;
}
