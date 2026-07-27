import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-private-server');
}

export default function ActiveCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-private-server" />;
}
