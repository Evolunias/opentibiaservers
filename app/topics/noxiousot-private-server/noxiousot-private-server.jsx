import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-private-server');
}

export default function NoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-private-server" />;
}
