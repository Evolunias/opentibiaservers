import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-private-server');
}

export default function OfficialTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-private-server" />;
}
