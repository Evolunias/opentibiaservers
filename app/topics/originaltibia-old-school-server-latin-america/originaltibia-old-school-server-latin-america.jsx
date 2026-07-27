import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-old-school-server-latin-america');
}

export default function OriginaltibiaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-old-school-server-latin-america" />;
}
