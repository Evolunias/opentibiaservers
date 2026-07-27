import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-old-school-server');
}

export default function Luminera772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-old-school-server" />;
}
