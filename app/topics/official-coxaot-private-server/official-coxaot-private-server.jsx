import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-private-server');
}

export default function OfficialCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-private-server" />;
}
