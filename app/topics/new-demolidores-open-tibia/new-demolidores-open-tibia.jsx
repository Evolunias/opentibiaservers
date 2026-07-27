import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-open-tibia');
}

export default function NewDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-open-tibia" />;
}
