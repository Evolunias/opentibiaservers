import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-old-school-server');
}

export default function Oldera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-old-school-server" />;
}
