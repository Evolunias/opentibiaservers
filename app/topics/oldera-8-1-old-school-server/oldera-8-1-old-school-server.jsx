import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-old-school-server');
}

export default function Oldera81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-old-school-server" />;
}
