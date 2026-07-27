import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-old-school-server');
}

export default function Luminera96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-old-school-server" />;
}
