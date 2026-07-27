import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-open-tibia');
}

export default function NoResetDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-open-tibia" />;
}
