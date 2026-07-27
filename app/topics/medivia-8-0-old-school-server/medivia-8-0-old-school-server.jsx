import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-old-school-server');
}

export default function Medivia80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-old-school-server" />;
}
