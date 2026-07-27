import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-old-school-server');
}

export default function Miracle100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-old-school-server" />;
}
