import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-old-school-server');
}

export default function Miracle14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-old-school-server" />;
}
