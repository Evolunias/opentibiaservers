import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-old-school-server');
}

export default function Medivia11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-old-school-server" />;
}
