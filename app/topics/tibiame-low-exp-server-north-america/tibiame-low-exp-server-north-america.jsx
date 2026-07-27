import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-north-america');
}

export default function TibiameLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-north-america" />;
}
