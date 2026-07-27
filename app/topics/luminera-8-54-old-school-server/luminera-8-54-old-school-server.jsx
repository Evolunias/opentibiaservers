import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-old-school-server');
}

export default function Luminera854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-old-school-server" />;
}
