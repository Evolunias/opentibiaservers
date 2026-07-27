import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-open-tibia');
}

export default function BestDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-open-tibia" />;
}
