import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-ot-server');
}

export default function OldSchoolOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-ot-server" />;
}
