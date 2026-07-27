import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-old-school-server-mexico');
}

export default function RealeraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-old-school-server-mexico" />;
}
