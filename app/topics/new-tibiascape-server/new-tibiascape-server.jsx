import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-server');
}

export default function NewTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-server" />;
}
