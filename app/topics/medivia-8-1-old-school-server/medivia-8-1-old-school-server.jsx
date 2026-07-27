import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-old-school-server');
}

export default function Medivia81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-old-school-server" />;
}
