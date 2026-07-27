import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-old-school-server');
}

export default function Oldera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-old-school-server" />;
}
