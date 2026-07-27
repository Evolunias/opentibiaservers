import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-usa');
}

export default function RealestaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-usa" />;
}
