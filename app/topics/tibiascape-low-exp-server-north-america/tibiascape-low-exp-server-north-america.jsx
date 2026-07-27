import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-north-america');
}

export default function TibiascapeLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-north-america" />;
}
