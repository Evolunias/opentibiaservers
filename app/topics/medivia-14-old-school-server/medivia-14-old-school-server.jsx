import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-old-school-server');
}

export default function Medivia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-old-school-server" />;
}
