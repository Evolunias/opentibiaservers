import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-old-school-server');
}

export default function Luminera84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-old-school-server" />;
}
