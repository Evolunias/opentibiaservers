import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-old-school-server');
}

export default function Medivia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-old-school-server" />;
}
