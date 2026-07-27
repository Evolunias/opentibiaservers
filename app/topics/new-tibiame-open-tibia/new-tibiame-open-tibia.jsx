import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-open-tibia');
}

export default function NewTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-open-tibia" />;
}
