import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-old-school-server');
}

export default function Medivia96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-old-school-server" />;
}
