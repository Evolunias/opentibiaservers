import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-usa');
}

export default function TibiantisOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-usa" />;
}
