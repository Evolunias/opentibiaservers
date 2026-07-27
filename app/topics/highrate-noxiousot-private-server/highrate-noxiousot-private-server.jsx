import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-private-server');
}

export default function HighrateNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-private-server" />;
}
