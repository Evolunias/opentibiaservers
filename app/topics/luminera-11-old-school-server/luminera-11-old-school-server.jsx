import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-old-school-server');
}

export default function Luminera11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-old-school-server" />;
}
