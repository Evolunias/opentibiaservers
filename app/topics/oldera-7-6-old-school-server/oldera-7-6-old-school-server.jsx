import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-old-school-server');
}

export default function Oldera76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-old-school-server" />;
}
