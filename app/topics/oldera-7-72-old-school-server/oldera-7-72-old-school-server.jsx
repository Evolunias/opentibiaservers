import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-old-school-server');
}

export default function Oldera772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-old-school-server" />;
}
