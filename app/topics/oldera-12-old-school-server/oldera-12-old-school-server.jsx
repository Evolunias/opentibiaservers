import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-old-school-server');
}

export default function Oldera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-old-school-server" />;
}
