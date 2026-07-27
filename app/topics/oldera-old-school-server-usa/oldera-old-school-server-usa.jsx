import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-usa');
}

export default function OlderaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-usa" />;
}
