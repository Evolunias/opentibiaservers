import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-private-server');
}

export default function OldSchoolNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-private-server" />;
}
