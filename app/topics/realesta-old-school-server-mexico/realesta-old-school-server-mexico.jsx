import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-mexico');
}

export default function RealestaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-mexico" />;
}
