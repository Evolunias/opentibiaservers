import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-old-school-server');
}

export default function Luminera74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-old-school-server" />;
}
