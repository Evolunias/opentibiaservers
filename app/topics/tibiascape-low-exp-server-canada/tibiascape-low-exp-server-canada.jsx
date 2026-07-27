import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-canada');
}

export default function TibiascapeLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-canada" />;
}
