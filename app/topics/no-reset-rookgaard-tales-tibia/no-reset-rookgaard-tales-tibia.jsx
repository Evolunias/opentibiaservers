import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-tibia');
}

export default function NoResetRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-tibia" />;
}
