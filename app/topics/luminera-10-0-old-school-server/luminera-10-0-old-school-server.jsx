import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-old-school-server');
}

export default function Luminera100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-old-school-server" />;
}
