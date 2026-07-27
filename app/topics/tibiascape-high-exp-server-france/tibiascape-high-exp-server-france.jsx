import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-france');
}

export default function TibiascapeHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-france" />;
}
