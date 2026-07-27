import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-private-server');
}

export default function HighrateCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-private-server" />;
}
