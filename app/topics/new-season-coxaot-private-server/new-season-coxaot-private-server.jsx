import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-private-server');
}

export default function NewSeasonCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-private-server" />;
}
