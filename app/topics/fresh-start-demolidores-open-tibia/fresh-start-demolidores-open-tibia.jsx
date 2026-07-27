import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-open-tibia');
}

export default function FreshStartDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-open-tibia" />;
}
