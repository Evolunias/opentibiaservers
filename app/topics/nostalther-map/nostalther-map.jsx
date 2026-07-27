import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-map');
}

export default function NostaltherMapKeywordPage() {
  return <StaticKeywordPage slug="nostalther-map" />;
}
