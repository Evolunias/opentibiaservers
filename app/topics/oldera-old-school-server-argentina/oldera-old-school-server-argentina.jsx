import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-argentina');
}

export default function OlderaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-argentina" />;
}
