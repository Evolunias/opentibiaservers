import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-old-school-server');
}

export default function Medivia84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-old-school-server" />;
}
