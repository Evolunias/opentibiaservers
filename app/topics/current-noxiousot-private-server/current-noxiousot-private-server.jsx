import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-private-server');
}

export default function CurrentNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-private-server" />;
}
