import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-tibia');
}

export default function NoResetRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-tibia" />;
}
