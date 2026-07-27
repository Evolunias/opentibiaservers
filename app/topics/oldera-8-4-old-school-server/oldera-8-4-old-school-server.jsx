import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-old-school-server');
}

export default function Oldera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-old-school-server" />;
}
