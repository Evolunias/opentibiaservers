import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-old-school-server');
}

export default function Oldera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-old-school-server" />;
}
