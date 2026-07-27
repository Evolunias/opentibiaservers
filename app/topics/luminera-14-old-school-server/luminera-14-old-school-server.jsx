import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-old-school-server');
}

export default function Luminera14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-old-school-server" />;
}
