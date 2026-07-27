import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-old-school-server');
}

export default function Oldera11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-old-school-server" />;
}
