import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-private-server');
}

export default function CurrentCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-private-server" />;
}
