import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-old-school-server-sweden');
}

export default function NoxiousotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-old-school-server-sweden" />;
}
