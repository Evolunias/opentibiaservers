import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-mexico');
}

export default function TibiantisOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-mexico" />;
}
