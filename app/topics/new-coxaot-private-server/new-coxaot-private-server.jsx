import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-private-server');
}

export default function NewCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-private-server" />;
}
