import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-brazil');
}

export default function OlderaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-brazil" />;
}
