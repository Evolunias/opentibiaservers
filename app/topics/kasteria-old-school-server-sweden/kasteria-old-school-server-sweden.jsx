import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-old-school-server-sweden');
}

export default function KasteriaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-old-school-server-sweden" />;
}
