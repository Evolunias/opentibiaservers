import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-tibia');
}

export default function NoResetShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-tibia" />;
}
