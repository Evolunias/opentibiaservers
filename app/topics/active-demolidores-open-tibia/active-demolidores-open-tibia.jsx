import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-open-tibia');
}

export default function ActiveDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-open-tibia" />;
}
