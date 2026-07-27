import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-website');
}

export default function NoResetRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-website" />;
}
