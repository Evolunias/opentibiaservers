import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-13-old-school-server');
}

export default function Miracle13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-13-old-school-server" />;
}
