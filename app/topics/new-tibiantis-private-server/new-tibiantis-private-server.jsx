import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-private-server');
}

export default function NewTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-private-server" />;
}
