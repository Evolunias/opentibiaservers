import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-client');
}

export default function NewTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-client" />;
}
