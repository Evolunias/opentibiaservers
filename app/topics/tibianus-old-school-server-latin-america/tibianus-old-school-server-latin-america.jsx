import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-latin-america');
}

export default function TibianusOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-latin-america" />;
}
