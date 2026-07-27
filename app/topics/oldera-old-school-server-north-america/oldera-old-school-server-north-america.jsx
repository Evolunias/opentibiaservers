import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-north-america');
}

export default function OlderaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-north-america" />;
}
