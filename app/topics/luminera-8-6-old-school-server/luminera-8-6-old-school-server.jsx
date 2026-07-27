import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-old-school-server');
}

export default function Luminera86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-old-school-server" />;
}
