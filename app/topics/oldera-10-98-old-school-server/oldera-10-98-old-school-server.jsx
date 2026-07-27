import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-old-school-server');
}

export default function Oldera1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-old-school-server" />;
}
