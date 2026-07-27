import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-open-tibia');
}

export default function NoResetOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-open-tibia" />;
}
