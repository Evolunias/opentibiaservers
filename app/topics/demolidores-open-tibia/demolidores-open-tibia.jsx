import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-open-tibia');
}

export default function DemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-open-tibia" />;
}
