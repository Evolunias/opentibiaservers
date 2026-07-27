import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-private-server');
}

export default function LowrateCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-private-server" />;
}
