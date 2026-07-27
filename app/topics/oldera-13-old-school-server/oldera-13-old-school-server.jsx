import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-old-school-server');
}

export default function Oldera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-old-school-server" />;
}
