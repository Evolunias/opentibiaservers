import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-old-school-server');
}

export default function Medivia772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-old-school-server" />;
}
