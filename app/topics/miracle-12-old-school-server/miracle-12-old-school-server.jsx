import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-old-school-server');
}

export default function Miracle12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-old-school-server" />;
}
