import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-map');
}

export default function MistOfDeathMapKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-map" />;
}
