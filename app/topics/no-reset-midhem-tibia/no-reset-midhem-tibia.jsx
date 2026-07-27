import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-tibia');
}

export default function NoResetMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-tibia" />;
}
