import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-old-school-server');
}

export default function Luminera12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-old-school-server" />;
}
