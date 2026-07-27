import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-old-school-server');
}

export default function Luminera1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-old-school-server" />;
}
