import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-tibia');
}

export default function TopDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-tibia" />;
}
