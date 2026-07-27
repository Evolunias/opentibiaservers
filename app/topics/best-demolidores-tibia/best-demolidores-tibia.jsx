import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-tibia');
}

export default function BestDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-tibia" />;
}
