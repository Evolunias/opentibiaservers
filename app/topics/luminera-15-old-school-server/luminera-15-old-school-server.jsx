import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-old-school-server');
}

export default function Luminera15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-old-school-server" />;
}
