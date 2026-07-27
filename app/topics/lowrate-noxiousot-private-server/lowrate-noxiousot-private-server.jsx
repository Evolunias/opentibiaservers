import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-private-server');
}

export default function LowrateNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-private-server" />;
}
