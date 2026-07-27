import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-old-school-server');
}

export default function Medivia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-old-school-server" />;
}
