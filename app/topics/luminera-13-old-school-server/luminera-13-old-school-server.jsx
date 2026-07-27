import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-old-school-server');
}

export default function Luminera13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-old-school-server" />;
}
