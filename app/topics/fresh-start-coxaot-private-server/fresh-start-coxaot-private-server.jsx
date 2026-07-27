import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-private-server');
}

export default function FreshStartCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-private-server" />;
}
