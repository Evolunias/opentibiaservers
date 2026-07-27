import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-north-america');
}

export default function TibiascapeHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-north-america" />;
}
