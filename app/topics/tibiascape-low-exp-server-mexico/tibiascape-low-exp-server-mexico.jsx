import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-mexico');
}

export default function TibiascapeLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-mexico" />;
}
