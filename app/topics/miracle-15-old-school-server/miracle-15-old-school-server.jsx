import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-old-school-server');
}

export default function Miracle15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-old-school-server" />;
}
