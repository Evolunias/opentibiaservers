import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-open-tibia');
}

export default function TibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-open-tibia" />;
}
