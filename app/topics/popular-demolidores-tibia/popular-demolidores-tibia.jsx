import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-tibia');
}

export default function PopularDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-tibia" />;
}
