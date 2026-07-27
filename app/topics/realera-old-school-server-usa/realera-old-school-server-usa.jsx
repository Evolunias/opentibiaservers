import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-usa');
}

export default function RealeraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-usa" />;
}
