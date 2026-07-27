import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-private-server');
}

export default function BestCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-private-server" />;
}
