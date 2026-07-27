import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-open-tibia');
}

export default function CustomTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-open-tibia" />;
}
