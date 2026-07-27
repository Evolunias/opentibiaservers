import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-old-school-server');
}

export default function Medivia1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-old-school-server" />;
}
