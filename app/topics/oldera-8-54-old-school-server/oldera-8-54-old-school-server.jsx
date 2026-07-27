import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-old-school-server');
}

export default function Oldera854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-old-school-server" />;
}
