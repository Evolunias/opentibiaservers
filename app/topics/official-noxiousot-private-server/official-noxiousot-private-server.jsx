import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-private-server');
}

export default function OfficialNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-private-server" />;
}
