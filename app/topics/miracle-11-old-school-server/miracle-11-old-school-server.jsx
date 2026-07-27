import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-old-school-server');
}

export default function Miracle11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-old-school-server" />;
}
