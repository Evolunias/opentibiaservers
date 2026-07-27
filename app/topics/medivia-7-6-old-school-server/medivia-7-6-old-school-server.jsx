import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-old-school-server');
}

export default function Medivia76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-old-school-server" />;
}
