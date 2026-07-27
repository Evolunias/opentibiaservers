import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-old-school-server');
}

export default function Medivia854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-old-school-server" />;
}
