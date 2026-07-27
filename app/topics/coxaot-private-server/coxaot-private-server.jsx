import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-private-server');
}

export default function CoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-private-server" />;
}
