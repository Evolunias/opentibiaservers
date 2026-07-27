import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-mexico');
}

export default function NostaltherOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-mexico" />;
}
