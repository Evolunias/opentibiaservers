import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-open-tibia');
}

export default function NoResetRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-open-tibia" />;
}
