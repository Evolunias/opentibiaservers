import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-open-tibia');
}

export default function CustomDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-open-tibia" />;
}
