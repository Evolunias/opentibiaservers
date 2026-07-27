import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-open-tibia');
}

export default function NoResetLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-open-tibia" />;
}
