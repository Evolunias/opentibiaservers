import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-private-server');
}

export default function TopCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-private-server" />;
}
