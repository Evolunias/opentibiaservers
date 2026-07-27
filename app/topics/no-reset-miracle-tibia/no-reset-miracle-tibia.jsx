import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-tibia');
}

export default function NoResetMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-tibia" />;
}
