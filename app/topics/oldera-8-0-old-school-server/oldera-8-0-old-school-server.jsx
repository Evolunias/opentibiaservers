import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-old-school-server');
}

export default function Oldera80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-old-school-server" />;
}
