import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-tibia');
}

export default function FreshStartDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-tibia" />;
}
