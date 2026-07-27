import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-latin-america');
}

export default function OlderaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-latin-america" />;
}
