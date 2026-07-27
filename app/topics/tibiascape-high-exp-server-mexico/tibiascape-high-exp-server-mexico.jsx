import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-mexico');
}

export default function TibiascapeHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-mexico" />;
}
