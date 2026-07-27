import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-open-tibia');
}

export default function ActiveTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-open-tibia" />;
}
