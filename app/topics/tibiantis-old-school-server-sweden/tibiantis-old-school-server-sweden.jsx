import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-sweden');
}

export default function TibiantisOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-sweden" />;
}
