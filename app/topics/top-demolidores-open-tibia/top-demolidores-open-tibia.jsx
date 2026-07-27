import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-open-tibia');
}

export default function TopDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-open-tibia" />;
}
