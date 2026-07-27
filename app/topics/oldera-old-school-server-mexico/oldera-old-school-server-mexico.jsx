import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-mexico');
}

export default function OlderaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-mexico" />;
}
