import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-open-tibia');
}

export default function NoResetXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-open-tibia" />;
}
