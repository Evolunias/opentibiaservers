import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-argentina');
}

export default function TibiantisOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-argentina" />;
}
