import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-old-school-server');
}

export default function Medivia100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-old-school-server" />;
}
