import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-tibia');
}

export default function NoResetUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-tibia" />;
}
