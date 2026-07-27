import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-open-tibia');
}

export default function NoResetElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-open-tibia" />;
}
