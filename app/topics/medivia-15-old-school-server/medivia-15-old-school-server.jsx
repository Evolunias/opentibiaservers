import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-old-school-server');
}

export default function Medivia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-old-school-server" />;
}
