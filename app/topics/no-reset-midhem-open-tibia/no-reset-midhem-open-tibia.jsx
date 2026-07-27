import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-open-tibia');
}

export default function NoResetMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-open-tibia" />;
}
